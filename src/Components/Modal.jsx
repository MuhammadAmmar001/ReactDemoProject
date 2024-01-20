import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SuccessModal({ title, message, continueHandler }) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => continueHandler(false)}>Continue</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    );
}

