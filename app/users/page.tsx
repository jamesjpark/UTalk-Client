import React from 'react'

const UsersPage = () => {
  return (
    <div style={{width: '100%', height: '100%', padding: 16, background: '#ECECEC', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
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

  )
}

export default UsersPage