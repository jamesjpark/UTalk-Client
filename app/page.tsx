import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <img style={{width: 65, height: 64}} src="https://via.placeholder.com/65x64" />
    <div style={{color: 'black', fontSize: 32, fontFamily: 'Jura', fontWeight: '400', wordWrap: 'break-word'}}>UTalk</div>
</div>

<div style={{color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>log in</div>
    </main>
  );
}
