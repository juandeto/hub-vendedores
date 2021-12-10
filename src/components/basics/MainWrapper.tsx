import  { FC } from 'react'; 

const MainWrapper: FC = function({ children }) {
  return <main className="mainWrapper">{children}</main>
}

export default MainWrapper;