import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'MOSES', lastName:"KATONGO", email: "moses@outlook.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox
         type='greeting'
         title='Welcome'
         user= {loggedIn?.firstName || 'Guest'}
         subtext='Acess and manage your account and transactions efficently'
         />
         <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1250.23}
         />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user ={loggedIn}
      transactions={[]}
      banks={[{currentBalance:50.32}, {currentBalance:7000.23}]}
      
      />
    </section>
  )
}

export default Home