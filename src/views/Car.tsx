import cn from 'classnames'
import { Button, ErrorBlock, Stepper, SwipeAction, Toast } from 'antd-mobile'
import { DeleteOutline } from 'antd-mobile-icons'
import data from '@/data'
import { useAppDispatch, useCar } from '@/store/hooks'
import { clearCar, payCar, removeGoodsToCar, updateGoodsItem } from '@/store/actions/car'
import { useMemo } from 'react'
import EmptySVG from '@/assets/empty.svg'

type Props = {
  className?: string,
  [key: string]: unknown,
}

const NoCarGoods = () => (
  <div className='no-car-goods text-center'>
    <ErrorBlock
      image={EmptySVG}
      style={{
        '--image-height': '150px',
      }}
      title={null}
      description={
        <span>暂无商品</span>
      }
    />
  </div>
)

export default function Car({
  className,
  ...rest
}: Props) {
  const car = useCar()
  const dispatch = useAppDispatch()

  const price = useMemo(() => {
    return car.reduce((prev, { count, price: p }) => prev + count * p, 0)
  }, [car])

  const handleClear = () => {
    dispatch(clearCar())
  }

  const handleDelete = (goods: CarGoodsItem) => {
    dispatch(removeGoodsToCar(goods))
  }

  const updateGoodsCount = (value: number, goods: CarGoodsItem) => {
    if (value > 0) {
      dispatch(updateGoodsItem({
        ...goods,
        count: value,
      }))
    } else {
      dispatch(removeGoodsToCar(goods))
    }
  }

  const handlePay = () => {
    Toast.show({
      icon: 'loading',
      content: '正在结算…',
      duration: 0,
      maskClickable: false,
    })
    dispatch(payCar()).then(() => {
      Toast.show({
        icon: 'success',
        content: '支付成功',
        duration: 1000,
      })
    })
  }
  
  return (
    <div className={cn(['relative h-full', className, 'overflow-hidden'])} {...rest}>
      <div className="pb-10 h-full">
        <div className='p-2.5 h-full overflow-auto'>
          {
            car.length === 0
              ? <NoCarGoods />
              : (
                  car.map((x, i) => {
                    const image = data.find(y => y.label === x.label)!.image
                    return (
                      <SwipeAction
                        key={i}
                        className='bg-white mb-2.5 rounded-lg'
                        rightActions={[
                          {
                            key: 'delete',
                            text: '删除',
                            color: 'danger',
                            onClick: () => handleDelete(x),
                          },
                        ]}
                      >
                        <div className='flex p-2.5 h-24'>
                          <img className='h-full aspect-square rounded mr-2.5' src={image} alt={x.label} />
                          <div className='flex flex-col flex-1 overflow-hidden justify-between'>
                            <div className='font-bold text-base'>{x.label}</div>
                            <div className='flex justify-between h-9'>
                              <div className='text-black font-bold'>
                                <span className='text-xs'>￥</span>
                                <span className='text-lg'>{x.price}</span>
                              </div>
                              <Stepper
                                min={1}
                                value={x.count}
                                defaultValue={1}
                                onChange={val => updateGoodsCount(val, x)}
                              />
                            </div>
                          </div>
                        </div>
                      </SwipeAction>
                    )
                  })
              )
          }
        </div>
      </div>
      {
        car.length > 0 && (
          <div className='flex font-bold text-xs absolute bottom-0 left-0 right-0 bg-white h-10 justify-between p-2 items-center'>
            <div className='font-normal flex items-center' onClick={handleClear}>
              <DeleteOutline className='text-[20px] mr-1' />
              <span>清空</span>
            </div>
            <div>
              <span className='font-normal'>合计</span>
              <span>￥</span>
              <span className='text-lg mr-2.5'>{price}</span>
              <Button onClick={handlePay} color='primary' size='small'>结算</Button>
            </div>
          </div>
        )
      }
    </div>
  )
}
