import cn from 'classnames'
import { Button, ErrorBlock, Stepper, SwipeAction, Toast } from 'antd-mobile'
import { DeleteOutline } from 'antd-mobile-icons'
import data from '@/data'
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
  const _data: CarGoodsItem[] = [
    {
      label: '冰鲜柠檬水',
      price: 4,
      count: 2,
    },
  ]

  const handlePay = () => {
    Toast.show({
      icon: 'loading',
      content: '正在结算…',
    })
  }
  
  return (
    <div className={cn(['relative h-full', className, 'overflow-hidden'])} {...rest}>
      <div className="pb-10 h-full">
        <div className='p-2.5 h-full overflow-auto'>
          {
            _data.length === 0
              ? <NoCarGoods />
              : (
                  _data.map((x, i) => {
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
        data.length > 0 && (
          <div className='flex font-bold text-xs absolute bottom-0 left-0 right-0 bg-white h-10 justify-between p-2 items-center'>
            <div className='font-normal flex items-center'>
              <DeleteOutline className='text-[20px] mr-1' />
              <span>清空</span>
            </div>
            <div>
              <span className='font-normal'>合计</span>
              <span>￥</span>
              <span className='text-lg mr-2.5'>0</span>
              <Button onClick={handlePay} color='primary' size='small'>结算</Button>
            </div>
          </div>
        )
      }
    </div>
  )
}
