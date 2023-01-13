import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  Items  from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул Белен",
          img: "Стул1.jpg",
          desc: "Изящный стул Белен станет превосходным дополнением классической кухни и внесет в интерьер нотки утонченности и стиля.",
          category: "chairs",
          price: "4590",
        },
        {
          id: 2,
          title: "Кухонный стол Давос",
          img: "chair1.jpg",
          desc: "Кухонный стол",
          category: "tables",
          price: "9950",
        },
        {
          id: 3,
          title: "Кухонный стол раздвижной Модена",
          img: "Стол2.jpg",
          desc: "Кухонный стол",
          category: "tables",
          price: "13990",
        },
        {
          id: 4,
          title: "Угловой диван Атланта",
          img: "Диван угловой.jpg",
          desc: "Диван-кровать",
          category: "sofas",
          price: "22790",
        },
        {
          id: 5,
          title: "Стул Турин",
          img: "Стул2.jpg",
          desc: "Изящный стул Турин",
          category: "chairs",
          price: "10990",
        },
        {
          id: 6,
          title: "Стол-книжка СП-12",
          img: "Стол-книжка.jpg",
          desc: "Стол-книжка",
          category: "tables",
          price: "4399",
        },
        {
          id: 7,
          title: "Диван-кровать DREAMART Канзас",
          img: "Диван-кровать.jpg",
          desc: "Диван-кровать",
          category: "sofas",
          price: "25990",
        },
        {
          id: 8,
          title: "Стул Hanna",
          img: "stul.jpg",
          desc: "Стул Hanna окажется на своем месте как в городской кухне, так и на веранде дачного дома. Изделие достаточно легкое, его несложно передвинуть или занести в дом, если приближается дождь, – прекрасный выбор для летней загородной жизни.",
          category: "chairs",
          price: "1699",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem = {this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
       isInArray = true
    })
      if(!isInArray)
         this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
