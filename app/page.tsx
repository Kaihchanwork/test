const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="text-3xl font-bold tracking-tight">
        Straumann - Intelligence Based Decisioning
      </h1>
      <p>
        Welcome to the testing site for the Straumann Intelligence Based POC
        project. If this is your first time here, please take a minute to read
        this page to get an idea of what this site is.
      </p>

      <h2 className="text-2xl font-bold tracking-tight">What is this?</h2>
      <p>
        This site can be used to test and demo the different events occurring in
        the Straumann Intelligence Based POC project. You can trigger the{" "}
        <i>real</i> events from AEM, SKill, and Commerce (using the same code
        SDK snippets they do) directly from this site, and see the results in
        SAP CDP.
      </p>

      <h2 className="text-2xl font-bold tracking-tight">How can I use this?</h2>
      <p>
        Set a contact UID in at the top of this page (or leave it empty for
        anonymous events), then go to your desired journey page and start
        triggering events.
      </p>

      <h2 className="text-2xl font-bold tracking-tight">How does this work?</h2>
      <p>
        This site is just a very simple frontend application that imports the
        SAP CDP SDKs of SKILL, AEM, and eShop. It then uses these SDKs to
        trigger events in SAP CDP, directly from this website.
      </p>

      <p>
        This site is completely stateless, there is no server running behind it.
        Just some HTML, CSS, and JS files in your browser. Anything that is
        stored (like the values you enter in the forms) is stored locally in
        your browser. Have a look at your Dev Tools and check the localStorage
        for this page (after you&apos;ve been using it for a little, just so
        that some data is stored), you&apos;ll see what I mean.
      </p>

      <p>
        If you want to clear all the data stored in your browser, click the red
        button on the top of this page (or clear your localStorage manually,
        same thing).
      </p>
    </div>
  );
};

export default HomePage;
