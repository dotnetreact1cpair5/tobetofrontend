function Welcome() {
  return (
    <section className="mt-12 py-5">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h3 className="flex">
          <span className="text-4xl font-bold text-[#9933ff]">TOBETO</span>
          <span className="text-3xl font-normal">'ya hoş geldin</span>
        </h3>
        <h4 className="mb-5 mt-2 text-3xl underline decoration-teal-300 decoration-wavy decoration-4 underline-offset-8">
          Efe Özgür
        </h4>
        <p className="mt-[2em] text-2xl">
          Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
          yanında!
        </p>
      </div>
    </section>
  );
}
export default Welcome;
