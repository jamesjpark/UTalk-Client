import React from 'react'

const UsersPage = () => {
  return (
    <div style={{width: '100%', height: 'auto', background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{paddingLeft: 51, paddingRight: 51, paddingTop: 23, paddingBottom: 23, background: 'white', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.10)', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 11, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <img style={{width: 65, height: 64}} src="hookem.png" />
                    <div style={{color: 'black', fontSize: 32, fontFamily: 'Jura', fontWeight: '400', wordWrap: 'break-word'}}>UTalk</div>
                </div>
                <div style={{color: '#292929', fontSize: 28, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textAlign:'center', width:'100%'}}>Log In for UTalk-Client</div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 21, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 25, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
                        <input placeholder="Username" style={{width: 440, paddingLeft: 30, paddingRight: 30, paddingTop: 18, paddingBottom: 18, background: 'white', borderRadius: 10, overflow: 'hidden', border: '1px #C54903 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex', color: '#4F4F4F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}/>
                        <input placeholder="Password" style={{width: 440, paddingLeft: 30, paddingRight: 30, paddingTop: 18, paddingBottom: 18, background: 'white', borderRadius: 10, overflow: 'hidden', border: '1px #C54903 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex', color: '#4F4F4F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}/>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
                        <div style={{color: '#4F4F4F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Or continue with</div>
                        <div style={{width: 304, height: 0, border: '0.50px #C54903 solid'}}></div>
                    </div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 22, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 22, display: 'flex'}}>
                        <button style={{paddingLeft: 39, paddingRight: 39, paddingTop: 9, paddingBottom: 9, background: '#F7F7F7', borderRadius: 4, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <img style={{width: 30, height: 30}} src="google.png" />
                        </button>
                        <button style={{width: 312, height: 62, position: 'relative'}}>
                            <div style={{width: 312, height: 62, left: 0, top: 0, position: 'absolute', background: '#C54903', borderRadius: 8}} />
                            <div style={{left: 133, top: 21, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'IBM Plex Serif', fontWeight: '400', wordWrap: 'break-word'}}>Log in</div>
                        </button>
                    </div>
                    <div style={{display:'flex', height:'fit-content'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Serif', fontWeight: '500', letterSpacing: 1.28, wordWrap: 'break-word'}}>Don’t have an account? </div><div style={{color: '#3BADCD', fontSize: 16, fontFamily: 'IBM Plex Serif', fontWeight: '500', letterSpacing: 1.28, wordWrap: 'break-word'}}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UsersPage