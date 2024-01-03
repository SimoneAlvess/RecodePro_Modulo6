import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="container pt-2 text-center d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <p>&copy; 2023 DestinoFácil. Todos os direitos reservados.</p>
            <div className="d-flex pb-3">
                <i className="bi bi-facebook fs-6 pe-2 iconSocial"></i>
                <i className="bi bi-instagram fs-6 pe-2 iconSocial"></i>
                <i className="bi bi-twitter fs-6 iconSocial"></i>
            </div>
        </div>
    </footer>
  )
}
