import ErrorText from "./components/ErrorText";
import InputWrapper from "./components/InputWrapper";
import useGeneratePDF from "./hooks/useGeneratePDF";

function App() {
  const { register, errors, onSubmit } = useGeneratePDF();
  return (
    <form
      onSubmit={onSubmit}
      id="form"
      className=" flex items-center justify-center flex-col w-screen h-screen gap-4"
    >
      <InputWrapper>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="input w-96 input-bordered"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <ErrorText>This field is required</ErrorText>}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="course">Course:</label>
        <select
          id="course"
          className="select select-bordered w-96 "
          {...register("course", { required: true })}
        >
          <option disabled value="">
            Select Course
          </option>
          <option value="M.tech">M.tech</option>
          <option value="B.tech">B.tech</option>
        </select>
        {errors.course && <ErrorText>This field is required</ErrorText>}
      </InputWrapper>
      <button type="submit" className=" btn btn-primary ">
        Generate PDf
      </button>
    </form>
  );
}

export default App;
