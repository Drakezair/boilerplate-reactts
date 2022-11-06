interface IMenuOption {
  title: string;
  path: string;
}

const MenuOptions: IMenuOption[] = [
  {
    title: 'Characters',
    path: '/'
  },
  {
    title: 'Favorites',
    path: '/favorites'
  }
];

export { MenuOptions };
export type { IMenuOption };
