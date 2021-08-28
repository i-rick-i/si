import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, PanelHeaderBack, PromoBanner} from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Persik.css';

const promoBannerProps={
  title: 'Заголовок',
  domain: 'vk.com',
  trackingLink: 'https://vk.com',
  ctaText: 'Перейти',
  advertisingLabel: 'Реклама',
  iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
  description: 'Описание рекламы',
  ageRestrictions: "14+",
  statistics: [
    {url: '', type: 'playbackStarted'},
    {url: '', type: 'click'}
  ]
};

const Persik=props=>(
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			А это Персик]
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
    
	</Panel>
);

Persik.propTypes={
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;