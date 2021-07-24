interface BaseMenuItem {
    title: string;
    icon: string;
}

interface ComponentMenuItem extends BaseMenuItem {
    component: any;
}

interface ClickMenuItem extends BaseMenuItem {
    click: any;
}

type MenuItem = ComponentMenuItem | ClickMenuItem;

export default MenuItem;