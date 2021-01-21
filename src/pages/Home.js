import React from 'react'
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>\
            <Feature>
                <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create your membership</OptForm.Text>
                </OptForm>
            </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
       </>
    )
}
