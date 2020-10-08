import React from 'react'
import {connect} from 'react-redux'
import {postUrl} from '../store/url'
import {useForm} from 'react-hook-form'
import Spacer from './Spacer'

function ShortUrl({postUrl, url}) {
  const {register, handleSubmit} = useForm()
  const onSubmit = data => {
    console.log(data)
    postUrl({data})
  }

  return (
    <div className="urlShortener">
      <div className="urlForm">
        <h1>Enter a looooooooooooooooong url ✂️</h1>
        <Spacer />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="formInput"
            name="longUrl"
            ref={register}
            label="long url"
            required
          />
          <input className="submit" type="submit" />
        </form>
        <Spacer />
        <h2>Shortened URL:</h2>
        <a href={url}>
          <h3>{url}</h3>
        </a>
        <br />
      </div>
    </div>
  )
}
const mapState = state => {
  return {
    url: state.url
  }
}

const mapDispatch = dispatch => ({
  postUrl: original => dispatch(postUrl(original))
})

export default connect(mapState, mapDispatch)(ShortUrl)
