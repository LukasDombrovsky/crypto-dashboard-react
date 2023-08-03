import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionWithBgImage from '../../components/sectionWithBgImage/sectionWithBgImage';

import classes from './forecast.module.scss';

import bgImage from '../../img/cover-forecast.jpg';

const Forecast = () => {
  let forecastObj = [
    {
      pair: 'USDT_BAT',
      forecast: 'fall',
      strength: '60%',
    },
    {
      pair: 'USDT_BNT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_BTC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_DASH',
      forecast: 'rise',
      strength: '57%',
    },
    {
      pair: 'USDT_DOGE',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_EOS',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_ETC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_ETH',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_GNT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_KNC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_LOOM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_LSK',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_LTC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_MANA',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_NXT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_QTUM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_REP',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_SC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_SNT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_STR',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_XMR',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_XRP',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_ZEC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'USDT_ZRX',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_ARDR',
      forecast: 'rise',
      strength: '59%',
    },
    {
      pair: 'BTC_ATOM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BAT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BCHABC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BCHSV',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BCN',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BTS',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_BURST',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_CLAM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_CVC',
      forecast: 'rise',
      strength: '61%',
    },
    {
      pair: 'BTC_DASH',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_DCR',
      forecast: 'rise',
      strength: '59%',
    },
    {
      pair: 'BTC_DGB',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_DOGE',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_EOS',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_ETC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_ETH',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_FCT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_FOAM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_GAME',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_GAS',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_GNT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_GRIN',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_HUC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_KNC',
      forecast: 'rise',
      strength: '70%',
    },
    {
      pair: 'BTC_LBC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_LOOM',
      forecast: 'fall',
      strength: '76%',
    },
    {
      pair: 'BTC_LPT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_LSK',
      forecast: 'fall',
      strength: '85%',
    },
    {
      pair: 'BTC_LTC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_MAID',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_MANA',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_NAV',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_NMC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_NMR',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_NXT',
      forecast: 'rise',
      strength: '66%',
    },
    {
      pair: 'BTC_OMG',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_OMNI',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_PASC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_POLY',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_PPC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_QTUM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_REP',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_SBD',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_SC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_SNT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_STEEM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_STORJ',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_STR',
      forecast: 'fall',
      strength: '89%',
    },
    {
      pair: 'BTC_STRAT',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_SYS',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_VIA',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_VTC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_XCP',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_XEM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_XMR',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_XPM',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_XRP',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_ZEC',
      forecast: '?',
      strength: '-',
    },
    {
      pair: 'BTC_ZRX',
      forecast: '?',
      strength: '-',
    },
  ];

  return (
    <SectionWithBgImage bgImage={bgImage} className={classes.forecast}>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <h1 className={`${classes.headline} display-4`}>
              THIS IS CURRENT CRYPTOCURRENCY FORECAST ON POLONIEX FOR NEXT 4H
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <table>
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Forecast</th>
                  <th>Strength</th>
                </tr>
              </thead>
              <tbody>
                {forecastObj.map((item) => (
                  <tr key={item.pair}>
                    <td>{item.pair}</td>
                    <td>{item.forecast}</td>
                    <td>{item.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </SectionWithBgImage>
  );
};
export default Forecast;
