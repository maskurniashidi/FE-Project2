import React, { Component } from 'react'
import Title from './Title'
import { FaSearchLocation,  FaPlusSquare, FaMoneyBill,FaPallet, FaUsers, FaMailBulk } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaSearchLocation />,
                title: "LOKASI BISNIS PRESTISIUS",
                info: "Alamat bisnis  prestisius, bergengsi dan sangat strategis di tengah kota Surabaya bisa digunakan untuk domisili resmi perusahaan sekaligus memberikan impresi perusahaan profesional sehingga meningkatkan kepercayaan mitra bisnismu"
            },
            {
                icon: <FaPlusSquare />,
                title: "PAKET LENGKAP VIRTUAL OFFICE + LEGALITAS",
                info: "Graha office menyediakan paket lengkap terima beres untuk sewa virtual office sekaligus pembuatan PT maupun CV dengan alamat bisnis yang prestisius dan legalitas lengkap, perusahaan anda akan semakin mendapatkan kepercayaan oleh mitra bisnis"
            },
            
            {
                icon: <FaPallet />,
                title: "RUANG KERJA NYAMAN",
                info: "Ruang kerja tenang dan nyaman, Fasilitas AC, meja, kursi, rak/loker, free wifi, ruang meeting & training, mini perpustakaan, kemanan & kebersihan disertai dengan view pegunungan di sebelah selatan surabaya membuat graha office sangat ideal untuk produktivitas bisnis anda"
            },
            {
                icon: <FaUsers />,
                title: "RESEPSIONIS PROFESIONAL",
                info: "Layanan Resepsionis Profesional siap membantu anda mulai dari menyapa klien anda, menerima dokumen yang masuk dan memberi notifikasi kepada anda"
            },
            {
                icon: <FaMoneyBill />,
                title: "PEMBAYARAN FLEKSIBEL",
                info: "Membayar hanya yang anda butuhkan. tanpa deposit, tanpa setup fee dan tanpa minimum kontrak. dengan biaya terjangkau anda cukup fokus untuk meningkatkan omset bisnismu"
            },
            {
                icon: <FaMailBulk />,
                title: "PENANGANAN SURAT MENYURAT",
                info: "Semua Surat dan paket yang dikirimkan ke alamat perusahaan, anda akan kami beri notifikasi & anda bebas mengambilnya kapan saja. Pemberitahuan melalui surat /  Email / SMS / WA"
            },
            

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
                <Title title="Mengapa Sewa Kantor Di Graha Office?" />
                <div className="row">
                    {this.state.services.map((item, index) => {
                        return (
                            <div className="col-md-4 col-lg-20 col-12 mx-auto my-3" key={index}>
                                <div className="card shadow-lg border-0 p-4">
                                    <article className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}