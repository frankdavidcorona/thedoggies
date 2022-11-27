export interface Doggie {
  name?: string;
  owner?: string;
  description?: string;
  thumbnail?: string;
  traits?: DoggieTraits[];
}

export interface DoggieTraits {
  trait?: string;
  value?: string;
}
