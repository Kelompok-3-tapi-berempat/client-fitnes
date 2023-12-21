import './Landing.css';

export default function ContentComponent() {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <img className='imgprofil' src="img/jumbo.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>Profil Perusahaan</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1>Let's Join Membership</h1>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="img/jumbo.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">1 Month</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="btn btn-primary btn-lg">Get Membership</button>
                                </div>
                            </div>
                        </div>
                            <div class="col">
                                <div class="card">
                                    <img src="img/jumbo.png" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">3 Month</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className="btn btn-primary btn-lg">Get Membership</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="img/jumbo.png" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">6 Month</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button className="btn btn-primary btn-lg">Get Membership</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="img/jumbo.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">12 Month</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="btn btn-primary btn-lg">Get Membership</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className="col-12 col-md-6">
                        <h1>TRAIN LIKE THE STARS</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                        <button className="btn btn-primary btn-lg">Go to Train Online</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='imgprofil' src="img/jumbo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
