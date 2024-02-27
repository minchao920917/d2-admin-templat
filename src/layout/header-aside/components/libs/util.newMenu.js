/*
 * @Author: minchao
 * @Date: 2024-02-23 19:05:07
 * @LastEditors: minchao
 * @LastEditTime: 2024-02-27 09:08:38
 * @Description: 请填写简介
 */

function hasUrlInChildren(obj, url) {
  // 先检查当前对象的 path 是否等于给定的 url
  if (obj.path === url) {
    return true
  }

  // 然后递归检查当前对象的 children 数组中的每个子对象
  if (obj.children && obj.children.length > 0) {
    return obj.children.some(child => hasUrlInChildren(child, url))
  }

  // 如果当前对象没有 children 或者 children 数组为空，则返回 false
  return false
}
/**
 * @description 创建菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 * @param {String} activePath 当前菜单项
 */
export function elMenuItem (h, item, activePath) {
  let icon = null
  const className = item.path === activePath ? 'menu-box-li is-active' : 'menu-box-li'
  if (item.icon) icon = <i class={`fa fa-${item.icon}`} />
  else if (item.iconSvg) icon = <d2-icon-svg name={item.iconSvg} />
  else icon = <i class="fa fa-file-o" />
  return (
    item
      ? <router-link to={item.path}>
        <li class={className} key={item.path} index={item.path}>
          {icon}
          <span >{item.title}</span>
        </li>
      </router-link>
      : null
  )
}

/**
 * @description 创建子菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 * @param {String} activePath 当前路由
 */
export function elSubmenu (h, menus, activePath) {
  return menus.map(menu => {
    let icon = null
    if (menu.icon) icon = <i class={`fa fa-${menu.icon}`} />
    if (menu.iconSvg) icon = <d2-icon-svg name={menu.iconSvg} />
    let className = 'title-span'
    if (menu.path === activePath) {
      className = 'title-span is-active'
    }
    if (menu.children && menu.children.some(item => item.path === activePath)) {
      className = 'title-span is-active'
    }
    return (
      <div class="menu-box">
        {
          menu.children
            ? <span class={className}>
              {icon}
              {menu.title}
            </span>
            : <router-link to={menu.path}>
              <span class={className}>
                {icon}
                {menu.title}
              </span>
            </router-link>
        }

        {
          menu.children
            ? <ul>
              {
                menu.children.map(child => elMenuItem.call(this, h, child, activePath))
              }
            </ul>
            : null
        }
      </div>)
  })
}
export function headerMenuItem (h, menu, activePath) {
  console.log('headerMenuItem', menu)
  console.log('headerMenuItem', activePath)

  const className = hasUrlInChildren(menu, activePath) ? 'menu-li is-active' : 'menu-li'
  let icon = null
  if (menu.icon) icon = <i class={`fa fa-${menu.icon}`} />
  else if (menu.iconSvg) icon = <d2-icon-svg name={menu.iconSvg} />
  else icon = <i class="fa fa-file-o" />

  if (menu.children === undefined) {
    return (
      <router-link to={menu.path}>
        <li class={className} key={menu.path} index={menu.path}>
          {icon}
          <span class="title">{menu.title}</span>
        </li>
      </router-link>
    )
  } else {
    return (
      <li class={className} key={menu.path} index={menu.path}>
        {icon}
        <span class="title">{menu.title}</span>
        <div class="dropdown">
          <div class="menu-wrap">
            {
              elSubmenu.call(this, h, menu.children, activePath)
            }
          </div>
        </div>
      </li>
    )
  }
}

/**
 * @description 在组件中调用此方法渲染菜单项目
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 * @param {String} activePath 选中的菜单项
 */
export function createMenu (h, menu, activePath) {
  // if (menu.children === undefined) return elMenuItem.call(this, h, menu)
  return headerMenuItem.call(this, h, menu, activePath)
}
