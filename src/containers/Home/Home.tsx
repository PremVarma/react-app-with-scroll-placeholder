import React, { FC, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useHistory } from 'react-router'
import './Home.css'
import axios from 'axios'
import SkeletonCard from '../../components/Skeleton/Skeleton'

export const Home: FC<any> = () => {
  const history = useHistory()

  const [state, setState] = useState({ users: [], count: 10, start: 1, msg: '' })

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.replace('/')
  }

  useEffect(() => {
    fetchData()
  }, []) //eslint-disable-line

  const fetchMoreData = () => {
    const { count, start } = state
    setState((prevState) => {
      return { ...prevState, start: state.start + state.count }
    })
    axios.get(`https://randomuser.me/api/?results=${count}&start=${start}`).then((response) => {
      setState((prevState) => {
        return { ...prevState, users: state.users.concat(response.data.results) }
      })
    })
  }

  const fetchData = (): void => {
    const { count, start } = state
    axios.get(`https://randomuser.me/api/?results=${count}&start=${start}`).then((response) => {
      setTimeout(() => {
        setState((prevState) => {
          return { ...prevState, users: response.data.results }
        })
      }, 1000)
    })
  }

  const renderCards = state.users.map((user: any, index) => (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={`https://picsum.photos/500/300/?image=${index}`} alt={user.name.first} />
        </div>
        <div className="card_content">
          <h2 className="card_title">
            {user.name.first.charAt(0).toUpperCase() +
              user.name.first.slice(1) +
              ' ' +
              user.name.last.charAt(0).toUpperCase() +
              user.name.last.slice(1)}{' '}
          </h2>
          <p className="card_text">
            {user.location.city.charAt(0).toUpperCase() +
              user.location.city.slice(1) +
              ', ' +
              user.location.state.charAt(0).toUpperCase() +
              user.location.state.slice(1)}
          </p>
          <p className="card_gender">{user.gender}</p>
          <button className="btn card_btn">{user.email}</button>
        </div>
      </div>
    </li>
  ))

  return (
    <div>
      <div className="container">
        <ul className="topnav">
          {/* <li className="left">
            <span>Home</span>
          </li> */}
          <li className="right">
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>

      <InfiniteScroll
        dataLength={state.users.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<SkeletonCard />}
      >
        <div className="main">
          <ul className="cards">{renderCards}</ul>
        </div>
      </InfiniteScroll>
    </div>
  )
}
