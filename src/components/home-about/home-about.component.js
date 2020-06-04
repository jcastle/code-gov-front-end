import React from 'react'
import CustomLink from 'components/custom-link'

export default class HomeAbout extends React.Component {
  render() {
    return (
      <section id="about" className="tablet:grid-col-6">
        <div className="bg-primary-lighter height-full">
          <header className="padding-x-4 padding-top-6">
            <h2 className="font-heading-lg text-primary text-center">About Code.gov</h2>
            <p>{this.props.aboutus}</p>
          </header>
          <ul className="padding-x-4">
            <li className="padding-y-3">
              <h3 className="text-primary text-uppercase margin-left-9 margin-bottom-0">Vision</h3>
              <span className="display-flex tablet:flex-row margin-0">
                <p className="">{this.props.vision}</p>
                <img
                  alt=""
                  className="order-first height-7 margin-top-3 margin-right-2"
                  src={`${PUBLIC_PATH}assets/img/icons/vision_icon_sm.png`}
                />
              </span>
            </li>
            <li>
              <h3 className="text-primary text-uppercase margin-left-9 margin-bottom-0">Mission</h3>
              <span className="display-flex table:flex-row margin-0">
                <p>{this.props.mission}</p>
                <img
                  alt=""
                  className="order-first height-7 margin-top-3 margin-right-2"
                  src={`${PUBLIC_PATH}assets/img/icons/mission_icon_sm.png`}
                />
              </span>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
