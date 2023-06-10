import React, { useState } from 'react';
import {View} from 'react-native';
import {Button, Dialog, PaperProvider, Portal, Text, TextInput} from 'react-native-paper';
import {BagPokemon} from '../../../../types/pokemon/Index';

interface EditDialogFormProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  pokemon: BagPokemon;
}

function EditDialogForm({visible, setVisible, pokemon}: EditDialogFormProps) {
    const [nickname, setNickname] = useState(pokemon.nickname);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={{alignSelf: 'flex-end'}}>שינוי כינוי פוקימון</Dialog.Title>
        <Dialog.Content>
          <TextInput label="כינוי" value={nickname} onChangeText={setNickname} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default EditDialogForm;
