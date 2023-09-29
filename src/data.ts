const data = [
  {
    label: '冰鲜柠檬水',
    price: 4,
  },
  {
    label: '芋圆葡萄',
    price: 8,
  },
  {
    label: '草莓啵啵',
    price: 9,
  },
  {
    label: '雪王大圣代(奥利奥饼干风味)',
    price: 6,
  },
  {
    label: '雪王大圣代(草莓)',
    price: 6,
  },
]

const images: Record<string, string> = import.meta.glob('@/assets/goods/*.jpg', { import: 'default', eager: true })

export default Object.entries(images).map(([, value], i) => {
  return {
    ...data[i],
    image: value,
  }
}) as GoodsItem[]