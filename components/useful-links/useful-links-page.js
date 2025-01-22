import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PostPaginations from "../post-paginations";

const UsefulLinksPage = () => {
  return (
    <section className="useful-links-page pt-120 pb-120">
      <Container>
        <div className="causes-col__3">                                            

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Disability Services</h3>
                  <br/>
                  <a href="http://www.adacas.org.au/" style={{color: "#F26532"}}> ACT Disability, Aged and Carer Advocacy Services (ADACAS)</a>
                  <br/>
                  <a href="https://www.communityservices.act.gov.au/disability_act/disability-justice-strategy" style={{color: "#F26532"}}>Disability Justice Strategy ACT</a>
                  <br/>
                  <br/>
                </div>                
             </div>
          </div>   

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Family Assistance</h3>
                  <br/>
                  <a href="https://shineforkids.org.au/" style={{color: "#F26532"}}>Shine for Kids</a>
                  <br/>
                  <a href="https://www.variety.org.au/nsw/programs/variety-every-chance-to-play/" style={{color: "#F26532"}}>Every Chance to Play</a>
                  <br/>
                  <br/>
                  <br/>
                </div>                
             </div>
          </div> 

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Financial Assistance</h3>
                  <br/>
                  <a href="http://www.carefcs.org/" style={{color: "#F26532"}}>Care Financial Counselling </a>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>                
             </div>
          </div> 

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Government Services</h3>
                  <br/>
                  <a href="http://www.cs.act.gov.au/" style={{color: "#F26532"}}>Corrective Services ACT</a>
                  <br/>
                  <a href="https://www.ics.act.gov.au/about-us" style={{color: "#F26532"}}>Inspector of Correctional Services</a>
                  <br/>
                  <br/>
                  <br/>
                </div>                
             </div>
          </div>                    

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Health Services</h3>
                  <br/>
                  <a href="https://www.directionshealth.com/" style={{color: "#F26532"}}>Directions Health </a>
                  <br/>
                  <a href="https://www.everyman.org.au/" style={{color: "#F26532"}}>Every Man</a>
                  <br/>
                  <a href="https://www.wellways.org/" style={{color: "#F26532"}}>Wellways </a>
                  <br/>
                  <a href="https://www.womenshealthmatters.org.au/" style={{color: "#F26532"}}>Women’s Centre for Health Matters </a>
                </div>                
             </div>
          </div> 

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Housing Services</h3>
                  <br/>
                  <a href="https://argylehousing.com.au/social/ainslie-village/" style={{color: "#F26532"}}>Argyle Housing </a>
                  <br/>
                  <a href="https://www.onelink.org.au/" style={{color: "#F26532"}}>One Link</a>
                  <br/>
                  <a href="https://thefarmingalong.com.au/" style={{color: "#F26532"}}>The Farm </a>
                  <br/>
                  <a href="https://www.toora.org.au/" style={{color: "#F26532"}}>Toora</a>
                </div>                
             </div>
          </div> 

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Legal Services</h3>
                  <br/>
                  <a href="https://www.alsnswact.org.au/" style={{color: "#F26532"}}>Aboriginal Legal Services NSW/ACT</a>
                  <br/>
                  <a href="http://austlii.community/foswiki/ACTLawHbk/ACTLawHandbook" style={{color: "#F26532"}}>ACT Law Handbook</a>
                  <br/>
                  <a href="https://www.canberracommunitylaw.org.au/" style={{color: "#F26532"}}>Canberra Community Law </a>
                  <br/>
                  <a href="https://www.legalaidact.org.au/" style={{color: "#F26532"}}>Legal Aid ACT </a>
                  <br/>
                  <a href="http://womenslegalact.org/" style={{color: "#F26532"}}>Women’s Legal Centre</a>                    
                  <br/>
                  <br/>
                  <br/>
                </div>                
             </div>
          </div> 

          <div className="cause-card">
             <div className="cause-card__inner">
                <div className="cause-card__content">
                  <h3>Assistance for Aboriginal and Torres Strait Islander Communities</h3>
                  <br/>
                  <a href="http://tjillarijustice.com.au/" style={{color: "#F26532"}}>Tjillari Justice</a>                  
                  <br/>
                  <a href="https://www.winnunga.org.au/" style={{color: "#F26532"}}>Winnunga Nimmityjah Aboriginal Health and Community Services </a>
                  <br/>
                  <a href="https://www.goodpathways.org.au/" style={{color: "#F26532"}}>Yeddung Mura</a>
                  <br/>
                </div>                
             </div>
          </div>                        

        </div>        
      </Container>
    </section>
  );
};
    
export default UsefulLinksPage;