import React from 'react'
import { connect } from 'react-redux'



class PostForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const title = this.getTitle.value
        const message = this.getMessagge.value

        const data =  {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })

        this.getTitle.value = ''
        this.getMessagge.value = ''

    }


    render() {

        return (
            <div>
                <h1> Crear Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getTitle = input} placeholder="ingresa el titulo del post" />
                    <br />
                    <textarea name="" id="" ref={(input) => this.getMessagge = input} cols="30" rows="10" placeholder=" Escribe tu  post aqui"></textarea>
                    <br />
                    <input type="submit"  value='post'/>
                </form>
            </div>
        )

    }



}

export default PostForm