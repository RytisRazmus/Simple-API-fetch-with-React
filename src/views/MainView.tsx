import React from 'react';
import { Table } from "../components/Table";
import { fetchPrices } from "../api/client";
import { findPairs } from "../services/currencyFilter";
import { Currency } from "../model/Currency";

type State = {
  prices: Array<Currency>,
  isLoading: boolean
}
//https://www.newline.co/@bespoyasov/how-to-use-state-in-react-components-with-typescript--625c1f27
class MainView extends React.Component {
  state: State = {
    prices: [],
    isLoading: true,
  };
  componentDidMount() {
    this.fetchdata();
  }
  setPrices = (prices: Array<Currency>) => {
    this.setState(() => ({
      prices: prices,
      isLoading: false,
    }))
  }
  fetchdata = () => {
    this.setState(() => ({ isLoading: true }))
    fetchPrices().then(response => {
      this.setPrices(response.data);
      this.findCurrencyPairs();
    }).catch(e => console.log(e))
  }
  findCurrencyPairs = () => {
    const prices = findPairs("USDT", this.state.prices);
    this.setPrices(prices);
  }
  render() {
    return (
      <div id="page">
        <div>
          <button className="primary bottom-right" onClick={this.fetchdata} >Fetch</button>
          <Table prices={this.state.prices} />
        </div>
        {this.state.isLoading === true &&
          <div className="spinner fixed center"></div>
        }
      </div>
    );
  }
}

export default MainView;