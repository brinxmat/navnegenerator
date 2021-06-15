import ReactGA from 'react-ga'

process.env.NODE_ENV = 'test'

ReactGA.initialize('dummy', { testMode: true })
