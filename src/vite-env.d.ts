/// <reference types="vite/client" />

type GoodsItem = {
  label: string,
  image: string,
  price: number,
}

type CarGoodsItem = Omit<GoodsItem, 'image'> & { count: number }