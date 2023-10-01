/// <reference types="vite/client" />

type GoodsItem = {
  id: number,
  label: string,
  image: string,
  price: number,
}

type CarGoodsItem = Omit<GoodsItem, 'image'> & { count: number }