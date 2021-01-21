import React from 'react'
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import OptForm from '../components/opt-form';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create your membership</OptForm.Text>
            </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
       </>
    )
}
