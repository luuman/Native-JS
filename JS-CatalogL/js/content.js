window.onload = function() {
    new CreateList([
    {
        project: [
        {text: "浏览器"},
        {text: "禁用右键，优化禁用F12",href: "Disable-F12"},
        {text: "禁用右键",href: "Prevent-Right-click"},
        {text: "右键功能",href: "RightClick"},
        {text: "右键菜单",href: "Right-click-nav"},
        {text: "动态标题",href: "TitleTop"}
        ]
    },

    {
        project: [{text: "页面"},
        {text: "回到顶部",href: "Top"},
        {text: "SetTimeout栏目展开",href: "SetTimeout"},
        {text: "页面配色切换",href: "Skin Peeler/2"},
        {text: "搜索功能",href: "Search/baidu"},
        {text: "A标签Title提示",href: "TitleTip"}]
    },

    ]);
};