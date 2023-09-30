import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import data from '@/data'
import addIcon from '@/assets/add.png'
import { useCar } from '@/store'
import { Stepper } from 'antd-mobile'

type Props = {
  className?: string,
  [key: string]: unknown,
}

function Home({
  className,
  ...rest
}: Props) {
  const car = useCar()

  const handleAddToCar = (goods: GoodsItem) => {
    car.addGoodsToCar({
      label: goods.label,
      price: goods.price,
      count: 1,
    })
  }

  const updateGoodsCount = (value: number, goods: CarGoodsItem) => {
    if (value > 0) {
      car.updateGoodsItem({
        ...goods,
        count: value,
      })
    } else {
      car.removeGoodsToCar(goods)
    }
  }

  return (
    <div className={cn(['p-2.5', className])} {...rest}>
      {
        data.map((x, i) => {
          const target = car.goodsList.find(c => c.label === x.label)
          return (
            <div className='flex p-2.5 bg-white mb-2.5 h-24 rounded-lg' key={i}>
              <img className='h-full aspect-square rounded mr-2.5' src={x.image} alt={x.label} />
              <div className='flex flex-col flex-1 overflow-hidden justify-between'>
                <div className='font-bold text-base'>{x.label}</div>
                <div className='flex justify-between h-9'>
                  <div className='text-black font-bold'>
                    <span className='text-xs'>￥</span>
                    <span className='text-lg'>{x.price}</span>
                  </div>
                  {
                    target
                      ? (
                        <Stepper
                          min={0}
                          value={target.count}
                          defaultValue={1}
                          onChange={val => updateGoodsCount(val, target)}
                        />
                      )
                      : (
                          <div onClick={() => handleAddToCar(x)}>
                            <img className='w-8 h-8' src={addIcon} alt="add" />
                          </div>
                      )
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const HomePage = observer<Props>(Home)
export default HomePage