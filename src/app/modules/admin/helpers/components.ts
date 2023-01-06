const execute = (items: any, service: any, method: string, alert: any) => {
  service[method](items).subscribe({
    next: (result: any) => {
      if (result.status == 'success')
        alert.setAlert({
          type: 'success',
          message: result.message || 'Salvo com sucesso!',
        });
      if (result.status == 'error')
        alert.setAlert({
          type: 'danger',
          message: result.message || 'Erro',
        });
      if (result[0]?.type) {
        alert.setAlert({
          type: 'warning',
          message: result[0].message || 'Falta algo!',
        });
      }
    },
    error: (error: any) => {
      console.log(error);
      alert.setAlert({
        type: 'danger',
        message: error.message || 'Erro',
      });
    },
  });
};

export const onUpdate = (items: any, service: any, alert: any) => {
  if (items.id) {
    execute(items, service, 'update', alert);
  } else {
    alert.setAlert({
      type: 'danger',
      message: "O 'id' foi removido, é preciso ele para poder salvar!",
    });
  }
};

export const onSave = (items: any, service: any, alert: any) => {
  execute(items, service, 'save', alert);
};
