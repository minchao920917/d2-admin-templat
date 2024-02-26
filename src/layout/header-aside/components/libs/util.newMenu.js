/*
 * @Author: minchao
 * @Date: 2024-02-23 19:05:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-02-26 21:52:12
 * @Description: 请填写简介
 */
/**
 * @description 创建菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elMenuItem (h, item) {
  console.log('item', item)

  let icon = null
  if (item.icon) icon = <i class={`fa fa-${item.icon}`} />
  else if (item.iconSvg) icon = <d2-icon-svg name={item.iconSvg} />
  else icon = <i class="fa fa-file-o" />
  return (
    item
      ? <router-link to={item.path}>
        <li class="menu-box-li" key={item.path} index={item.path}>
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
 */
export function elSubmenu (h, menus) {
  console.log('elSubmenu', menus)
  return menus.map(menu => {
    let icon = null
    if (menu.icon) icon = <i class={`fa fa-${menu.icon}`} />
    if (menu.iconSvg) icon = <d2-icon-svg name={menu.iconSvg} />
    console.log('menu', menu.title)
    return (
      <div class="menu-box">
        {
          menu.children
            ? <span class="title-span">
              {icon}
              {menu.title}
            </span>
            : <router-link to={menu.path}>
              <span class="title-span">
                {icon}
                {menu.title}
              </span>
            </router-link>
        }

        {
          menu.children
            ? <ul>
              {
                menu.children.map(child => elMenuItem.call(this, h, child))
              }
            </ul>
            : null
        }
      </div>)
  })
}

export function headerMenuItem (h, menu) {
  console.log('headerMenuItem', menu)
  let icon = null
  if (menu.icon) icon = <i class={`fa fa-${menu.icon}`} />
  else if (menu.iconSvg) icon = <d2-icon-svg name={menu.iconSvg} />
  else icon = <i class="fa fa-file-o" />

  if (menu.children === undefined) {
    return (
      <router-link to={menu.path}>
        <li class="menu-li" key={menu.path} index={menu.path}>
          {icon}
          <span class="title">{menu.title}</span>
        </li>
      </router-link>
    )
  } else {
    return (
      <li class="menu-li" key={menu.path} index={menu.path}>
        {icon}
        <span class="title">{menu.title}</span>
        <div class="dropdown">
          <div class="menu-wrap">
            {
              elSubmenu.call(this, h, menu.children)
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
 */
export function createMenu (h, menu) {
  // if (menu.children === undefined) return elMenuItem.call(this, h, menu)
  return headerMenuItem.call(this, h, menu)
}