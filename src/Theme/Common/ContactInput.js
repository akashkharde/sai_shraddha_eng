import { useFormContext } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { findInputError, isFormInvalid } from '../Ui/Utils';
import { useEffect } from 'react';

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const { register, formState: { errors }, setValue } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  useEffect(() => {
  }, [errors]);

  return (
    <div className={`form-group  ${className}`}>
      <label htmlFor={id} className="font-weight-bold text-black mx-1 mt-3">
        {label}
      </label>
      {isInvalid && (
        <InputError message={inputErrors.error.message} />
      )}
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className="form-control inputstyle"
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className="form-control inputstyle "
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <div className="contactAlert rounded-md my-2">
      <div className="framer-error displayCenter gap-3" style={framer_error}></div>
      <MdError />
      {message}
    </div>
  );
};

const framer_error = {
  opacity: 0,
  y: 4,
  transition: '0.2s',
};
