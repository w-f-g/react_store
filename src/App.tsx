import { TabBar } from "antd-mobile"
import { AppOutline, TruckOutline } from "antd-mobile-icons"
import { useState } from "react"
import cn from 'classnames'
import Car from "./views/Car"
import Home from "./views/Home"

function App() {
  const [tabActionKey, updateTabActionKey] = useState<'home' | 'car'>('home')
  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="flex-1 overflow-auto bg-[#f6f6f7]">
        <Home className={cn([tabActionKey === 'home' ? 'block' : 'hidden'])} />
        <Car className={cn([tabActionKey === 'car' ? 'block' : 'hidden'])} />
      </main>
      <TabBar
        activeKey={tabActionKey}
        className="border-t border-t-solid border-t-[#e6e6e6]"
        onChange={key => updateTabActionKey(key as typeof tabActionKey)}
      >
        <TabBar.Item key="home" title="首页" icon={<AppOutline />} />
        <TabBar.Item key="car" title="购物车" icon={<TruckOutline />} />
      </TabBar>
    </div>
  )
}

export default App
