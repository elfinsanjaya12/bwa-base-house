import React from 'react';
import { Container } from 'react-bootstrap';

export default function ChatPage() {
  return (
    <Container>
      <section className='hero-banner py-5 my-5'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 col-6'>
              <h1>Messages</h1>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-3'>
              <div className='d-flex align-items-start'>
                <div
                  className='nav flex-column nav-pills me-3'
                  id='v-pills-tab'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <button
                    className='nav-link active'
                    id='v-pills-home-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-home'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-home'
                    aria-selected='true'
                  >
                    Rara
                  </button>
                  <button
                    className='nav-link'
                    id='v-pills-baibai-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-baibai'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-baibai'
                    aria-selected='true'
                  >
                    Baibai
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='tab-content' id='v-pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='v-pills-home'
                  role='tabpanel'
                  aria-labelledby='v-pills-home-tab'
                  tabindex='0'
                >
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='bg-secondary message-left mb-5'>
                        <div style={{ float: 'left', marginRight: '30px' }}>
                          <img
                            width='80'
                            src='https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                            alt=''
                          />
                        </div>

                        <div style={{ width: '400px', float: 'left' }}>
                          <h4>Rara</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut ex reiciendis, molestias cumque libero
                            facere quae ipsa sequi autem iste odio eum omnis hic
                            praesentium sit molestiae ab. Voluptatum, optio.
                          </p>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                      </div>
                      <div className='message-right mb-5 bg-light p-3'>
                        <p>Bueno, deal.</p>
                      </div>
                      <div className='bg-secondary message-left mb-5'>
                        <div style={{ float: 'left', marginRight: '30px' }}>
                          <img
                            width='80'
                            src='https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                            alt=''
                          />
                        </div>

                        <div style={{ width: '400px', float: 'left' }}>
                          <h4>Rara</h4>
                          <p>
                            Amque libero facere quae ipsa sequi autem iste odio
                            eum omnis hic praesentium sit?
                          </p>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                      </div>
                      <div className='message-right mb-5 bg-light p-3'>
                        <p>12093 02490234 9392302</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='v-pills-baibai'
                  role='tabpanel'
                  aria-labelledby='v-pills-baibai-tab'
                  tabindex='0'
                >
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='bg-secondary message-left mb-5'>
                        <div style={{ float: 'left', marginRight: '30px' }}>
                          <img
                            width='80'
                            src='https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                            alt=''
                          />
                        </div>

                        <div style={{ width: '400px', float: 'left' }}>
                          <h4>BaiBai</h4>
                          <p>Como estas?</p>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                      </div>
                      <div className='message-right mb-5 bg-light p-3'>
                        <p>Si...</p>
                      </div>
                      <div className='message-right mb-5 bg-light p-3'>
                        <p>12093 02490234 9392302</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
