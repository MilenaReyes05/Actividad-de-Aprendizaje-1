import { format } from './utils';

describe('format', () => {
  it('devuelve una cadena vacía cuando no se definen nombres', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formatea solo los primeros nombres', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formatea nombres y apellidos', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formatea nombres, segundos nombres y apellidos', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});
