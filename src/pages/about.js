// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi there I'm the proud creator of this site, which I build with Gatsby.</p>
      </Layout>
    </main>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="This is the about page" />
  </>
)

// Step 3: Export your component
export default AboutPage