import React from "react"
import { Link } from "react-router-dom"
import { withUrlParser } from "../../../router/withUrlParser"
import UsersList from "../../components/UsersList"
import Preloader from "../../components/Preloader"

// const Users = function({
//   data,
//   urlParse,
//   limit = 4,
//   usersNumberAtPage = 3,
//   isFetching,
//   location,
//   current,
// }) {
//   // console.log(current)
//   // routeRendered({ params: current }) // тут должен располагаться?

//   // последний индекс предыдущей четверки(если limit == 4, если текущая кнопка, например, 5, то вычсляемцй индекс == 4, есди текущая страница 13, то вычисляемый индекс == 12)
//   const lastIndexOfPrevStep = Math.floor(current / limit) * limit
//   // если номер текущей страницы делится без остатка на 4, то значит, мы находимся на последней кнопке текущей пагинации: 4 / 8/ 12 и т.д.
//   // и для вычисления firstNumber необходимо отнять 3, т.е. (limit -1) == 3. Пример: otherIndexOfCurrentIndex == 8, firstNumber будет равен 5, т.е. 8 - (4-1) == 5
//   // а если номер текущей страницы делится с остатком на 4, то к  lastIndexOfPrevStep прибавляем 1
//   const otherIndexOfCurrentIndex = current % limit === 0 ? limit - 1 : -1

//   const firstNumber = lastIndexOfPrevStep - otherIndexOfCurrentIndex

//   const links = []
//   for (let i = 0; i < limit; i++) {
//     const index = firstNumber + i
//     links.push(
//       <Link to={`/users/page?pageNumber=${index}`} key={index}>
//         {index}
//       </Link>
//     )
//   }
//   console.log("isFetching", isFetching)
//   // if (isFetching) return <Preloader />

//   return (
//     <>
//       <UsersList data={data} />
//
//       {links}
//       <h1>{`данные страницы №${current}:`}</h1>
//       <div>{JSON.stringify(data)}</div>
//     </>
//   )
// }

class Users extends React.Component {
  state = {
    value: { value: 0 },
  }

  render() {
    console.log("render Users")

    return (
      <div>
        Component Users!
        <UsersList value={this.state.value} />
        <button
          onClick={() => {
            console.log(this.state.value)
            this.setState(prevState => {
              return { value: { value: prevState.value.value } }
            })
          }}
        />
      </div>
    )
  }
}
export default withUrlParser(Users)
