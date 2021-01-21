import * as React from "react"
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

function IndexPage(){
  return (

<main>
<Header />

  <title>Home Page</title>
  <div className="p-8">
  <p className="mt-8">
  <Button textColor="red" size="xl" bgColor="blue" className="rounded">This is cool</Button>
  </p>
  <p className="mt-8">
  <Button textColor="blue" size="lg" bgColor="default" className="rounded">This is cool</Button>
  </p>
  <p className="mt-8">
  <Button textColor="green" size="xl" bgColor="red" className="rounded">This is cool</Button>
  </p>
  <p className="mt-8">
  <Button textColor="default" size="default" bgColor="green">This is cool</Button>
  </p>
  </div>
  <Footer />
</main>
  )
}

export default IndexPage
