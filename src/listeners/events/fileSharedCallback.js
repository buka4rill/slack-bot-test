const fileSharedCallback = async ({ client, event }) => {
  // console.log('file event: ', event);
  // console.log(
  //   'file: ',
  //   await client.files.info({
  //     file: event.file.id,
  //   }).content
  // );
  // console.log(
  //   'json: ',
  //   JSON.stringify(
  //     await client.files.info({ file: event.file.id }).content_highlight_html
  //   )
  // );
  try {
    const file = await client.files.info({
      file: event.file.id,
    });

    console.log('file: ', file.file.preview);

    // const values = file.file.preview.split('\t').splice(-14, 13);
    const values = file.file.preview.split('\r\n');

    // Covert to JSON

    // Save to db

    console.log(values);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { fileSharedCallback };
