import React from 'react'

const UsersPage = () => {
  return (
//     <div style={{width: '100%', height: '100%', padding: 16, background: '#ECECEC', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
//     <div style={{width: 633, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
//         <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
//             <div style={{width: 48, height: 48, background: 'white', borderRadius: 13}} />
//             <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
//                 <div style={{width: 139, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Anonymous<br/><br/></div>
//                 <div style={{width: 96, height: 11, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>XX / XX   XX : XX</div>
//             </div>
//         </div>
//         <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
//             <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
//             <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
//             <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
//         </div>
//     </div>
//     <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
//         <div style={{width: 233, height: 36, color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Header / Title</div>
//         <div style={{width: 648, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODd<br/><br/><br/><br/></div>
//     </div>
//     <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 21, display: 'inline-flex'}}>
//         <div style={{width: 23, height: 23, position: 'relative', mixBlendMode: 'multiply'}}>
//             <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
//             <div style={{width: 23, height: 23, left: 0, top: -1, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
//                 <div style={{width: 23, height: 23, background: '#BF5700'}} />
//             </div>
//         </div>
//         <div style={{width: 23, height: 23, position: 'relative'}}>
//             <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
//             <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
//                 <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
//                 <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
//                     <div style={{width: 23, height: 23, background: 'white'}} />
//                 </div>
//             </div>
//             <img style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
//             <div style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute', mixBlendMode: 'multiply'}}>
//                 <img style={{width: 15.39, height: 15.39, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
//                 <div style={{width: 23, height: 23, left: -4.83, top: -8.12, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
//                     <div style={{width: 23, height: 23, background: '#BF5700'}} />
//                 </div>
//             </div>
//         </div>
//         <div style={{width: 23, height: 23, position: 'relative'}}>
//             <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
//             <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
//                 <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
//                 <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
//                     <div style={{width: 23, height: 23, background: '#E7C309'}} />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 17px' }}>
<div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'flex'}}>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 135, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <img style={{width: 65, height: 64}} src="https://via.placeholder.com/65x64" />
                <div style={{color: 'black', fontSize: 32, fontFamily: 'Jura', fontWeight: '400', wordWrap: 'break-word'}}>UTalk</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 58, display: 'inline-flex'}}>
                <div style={{height: 45, paddingLeft: 13, paddingRight: 13, paddingTop: 8, paddingBottom: 8, background: '#ECECEC', borderRadius: 15, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div><span style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🔍 </span><span style={{color: '#767575', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Search</span></div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 11, display: 'flex'}}>
                    <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#ECECEC', borderRadius: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{color: '#181818', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>log in</div>
                    </div>
                    <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#BF5700', borderRadius: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{color: '#181818', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>sign up</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 145, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
            <div style={{width: 96, height: 11, color: 'black', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>TOPICS</div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{width: 167, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🆓 자유 게시판<br/><br/><br/></div>
                    <div style={{width: 13.78, height: 0, transform: 'rotate(-137.46deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                    <div style={{width: 13.68, height: 0, transform: 'rotate(138.73deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'inline-flex'}}>
                    <div style={{width: 167, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🥇 Grade Level<br/><br/><br/></div>
                    <div style={{width: 13.78, height: 0, transform: 'rotate(-137.46deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                    <div style={{width: 13.68, height: 0, transform: 'rotate(138.73deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 167, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>✏️ Majors<br/><br/><br/></div>
                        <div style={{width: 13.68, height: 0, transform: 'rotate(-44.89deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                        <div style={{width: 13.78, height: 0, transform: 'rotate(38.92deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🏛️ Architecture</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>📈 Business</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>📞 Communication</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>📚 Education</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🛠️ Engineering</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🎨 Fine Arts</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>⛰️ Geosciences</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ℹ️ Information</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>📖 Liberal Arts</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🧬 Natural Sciences</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🏥 Nursing</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>💊 Pharmacy</div>
                        <div style={{width: 214, height: 26, color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🗣 Social Work</div>
                    </div>
                </div>
                <div style={{width: 167, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🧩 Club<br/><br/><br/></div>
                <div style={{width: 167, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>💰 Sell/Buy<br/><br/><br/></div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 33, display: 'inline-flex'}}>
            <div style={{width: 214, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>🛠️ Engineering</div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 35, display: 'flex'}}>
                <div style={{padding: 16, background: '#ECECEC', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
                    <div style={{width: 633, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 48, height: 48, background: 'white', borderRadius: 13}} />
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 139, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Anonymous<br/><br/></div>
                                <div style={{width: 96, height: 11, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>XX / XX   XX : XX</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
                        <div style={{width: 233, height: 36, color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Header / Title</div>
                        <div style={{width: 648, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODd<br/><br/><br/><br/></div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 21, display: 'inline-flex'}}>
                        <div style={{width: 23, height: 23, position: 'relative', mixBlendMode: 'multiply'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: -1, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 23, height: 23, background: '#BF5700'}} />
                            </div>
                        </div>
                        <div style={{width: 23, height: 23, position: 'relative'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                                <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: 'white'}} />
                                </div>
                            </div>
                            <img style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
                            <div style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 15.39, height: 15.39, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
                                <div style={{width: 23, height: 23, left: -4.83, top: -8.12, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: '#BF5700'}} />
                                </div>
                            </div>
                        </div>
                        <div style={{width: 23, height: 23, position: 'relative'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                                <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: '#E7C309'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: 680, padding: 16, background: '#ECECEC', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
                    <div style={{width: 633, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 48, height: 48, background: 'white', borderRadius: 13}} />
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                <div style={{width: 139, height: 26, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Anonymous<br/><br/></div>
                                <div style={{width: 96, height: 11, color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>XX / XX   XX : XX</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'flex'}}>
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                            <div style={{width: 6, height: 6, background: 'white', borderRadius: 9999}} />
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
                        <div style={{width: 233, height: 36, color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Header / Title</div>
                        <div style={{width: 648, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY </div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 21, display: 'inline-flex'}}>
                        <div style={{width: 23, height: 23, position: 'relative', mixBlendMode: 'multiply'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: -1, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 23, height: 23, background: '#BF5700'}} />
                            </div>
                        </div>
                        <div style={{width: 23, height: 23, position: 'relative'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                                <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: 'white'}} />
                                </div>
                            </div>
                            <img style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
                            <div style={{width: 15.39, height: 15.39, left: 3.81, top: 2.66, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 15.39, height: 15.39, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/15x15" />
                                <div style={{width: 23, height: 23, left: -4.83, top: -8.12, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: '#BF5700'}} />
                                </div>
                            </div>
                        </div>
                        <div style={{width: 23, height: 23, position: 'relative'}}>
                            <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                            <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}}>
                                <img style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/23x23" />
                                <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 23, height: 23, background: '#E7C309'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 96, display: 'inline-flex'}}>
            <div style={{width: 225, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 35, display: 'inline-flex'}}>
                <div style={{width: 146, height: 25, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>🔥 Hot Topic</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>1</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>2</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>3</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>4</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>5</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>6</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>7</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>8</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>9</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                    <div style={{width: 225, height: 21}}><span style={{ color: '#767575', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>10</span><span style={{ color: 'black', fontSize: 17, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}> TITLE TITLE TITLE</span></div>
                </div>
                <div style={{width: 23, height: 23, position: 'relative'}}>
                    <div style={{width: 23, height: 23, left: 0, top: 0, position: 'absolute'}}></div>
                    <div style={{width: 15.32, height: 15.33, left: 3.84, top: 3.83, position: 'absolute', background: 'black'}}></div>
                </div>
            </div>
            <div style={{width: 263, paddingTop: 118, paddingBottom: 130, paddingLeft: 66, paddingRight: 49, background: '#D9D9D9', borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 148, height: 116, textAlign: 'center', color: 'black', fontSize: 96, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>AD</div>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

export default UsersPage