Hello Tauri App
---

## Usage

```
yarn build

# build tauri
yarn tauri build
```


Add Splashscreen

```rust
fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            // we perform the initialization code on a new task so the app doesn't freeze
            tauri::async_runtime::spawn(async move {
                // initialize your app here instead of sleeping :)
                println!("Initializing...");
                std::thread::sleep(std::time::Duration::from_secs(2));
                println!("Done initializing.");

                // After it's done, close the splashscreen and display the main window
                splashscreen_window.close().unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
```

Create `/splashscreen` page with React Router

Main

```jsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

App

```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="splashscreen" element={<SplashScreenPage />} />
</Routes>
```

Preview with tauri

```
yarn tauri dev
```

Build app

```
yarn tauri build
```

build image located in `src-tauri/target/release/bundle/macos/hello-tauri-app.app`

Try it out!