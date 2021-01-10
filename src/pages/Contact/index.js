import React, { Component } from 'react'
import PageTitle from '../../components/PageTitle'
import ContentLayout from '../../components/ContentLayout'
import './index.scss'

class Contact extends Component {
  generateLink(name, url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="Contact-link">
        {name}
      </a>
    )
  }
  render() {
    return (
      <div className="Contact">
        <PageTitle text="Interested in making something happen?" />
        <ContentLayout
          subtitle="Let’s roll the dice"
          content={[
            <span className="Contact-paragraph">
              {`If you are a mysterious prince who wants to offer me a lot of`}
              <br />
              {`money, you can spam me via email: `}
              {this.generateLink('delany.design@gmail.com', 'mailto:delany.design@gmail.com')}
            </span>,
            <span className="Contact-paragraph">
              {`If you're curious to know how I apply my skills outside the workplace,`}
              <br />
              {`you can check out this `}
              {this.generateLink('side project', 'https://www.instagram.com/project_eire/')}
              {`, created in collaboration with some `}
              {this.generateLink('mighty-fine friends', 'https://www.instagram.com/p/CIF969jjIHI/')}
              {`.`}
            </span>,
            <span className="Contact-paragraph">
              {`If you're a master of multiple tabs and want to read my work`}
              <br />
              {`on alternative platforms, you can find me on `}
              {this.generateLink('Medium', 'https://medium.com/@delany.design')}
              {'.'}
            </span>,
            <span className="Contact-paragraph">
              {`If you'd like me to endorse your Microsoft Office skills`}
              <br />
              {`you can connect with me on `}
              {this.generateLink('LinkedIn', 'https://www.linkedin.com/in/eilisdelany/')}
              {'.'}
            </span>,
            <span>{'If you believe you’re the love of my life, keep searching….'}</span>,
          ]}
        />
      </div>
    )
  }
}
export default Contact
