import { Dialog } from '@headlessui/react'

interface Props {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
}

export const AppDialog = ({ isOpen, handleOpen }: Props) => {
  return (
    <Dialog open={isOpen} onClose={() => handleOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => handleOpen(false)}>Deactivate</button>
        <button onClick={() => handleOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}