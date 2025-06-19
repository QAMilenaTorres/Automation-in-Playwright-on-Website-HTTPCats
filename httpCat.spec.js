import { test, expect } from '@playwright/test';

test('Validação do título da página', async ({ page }) => {
  await page.goto('https://http.cat/');
  await expect(page).toHaveTitle(/HTTP Cats/);
});



test('Diagnóstico do HTML do código 404 da imagem do site', async ({ page }) => {
  await page.goto('https://http.cat/404');

  // Espera a página carregar (pode aumentar o timeout se precisar)
  await page.waitForLoadState('networkidle');

  // Captura o HTML da página no console
  const html = await page.content();
  console.log(html);
});



test('Validar página sendo carregada e imagem correta', async ({ page }) => {
  // Navega para a página do http.cat/404
  await page.goto('https://http.cat/404');

  //Aguarda e verifica se a página carregou corretamente
  await page.waitForLoadState('networkidle');

  // Seleciona a imagem pela URL absoluta no atributo src
  const imagem = page.locator('img[src="https://http.cat/404"]');

  // Verifica se a imagem está visível
  await expect(imagem).toBeVisible({ timeout: 10000 });
});



test('Validação de imagem diferente do protocolo selecionado', async ({ page }) => {
  // Navega para a página do código HTTP 404
  await page.goto('https://http.cat/404');

  // Localiza a imagem com src do código 403 (errado intencionalmente)
  const imagemErrada = page.locator('img[src="https://http.cat/403"]');

  // Espera que a imagem errada NÃO esteja visível (pois a página é 404, não 403)
  await expect(imagemErrada).not.toBeVisible();
});



/*
test('Pesquisar código HTTP via barra de pesquisa', async ({ page }) => {
  await page.goto('https://http.cat');

  const searchInput = page.locator('input[type="search"]');
  await expect(searchInput).toBeVisible();

  await searchInput.fill('404');

  // Tenta clicar no botão de submit, se existir
  const searchButton = page.locator('button[type="submit"]');
  if (await searchButton.count() > 0) {
    await searchButton.click();
  } else {
    await searchInput.press('Enter');
  }

  // Espera a URL atualizar para conter 404
  await expect(page).toHaveURL(/404/, { timeout: 100000 });

  console.log('URL atual:', page.url());

  const imagem = page.locator('img[src="https://http.cat/404"]');
  await expect(imagem).toBeVisible({ timeout: 200000 });
});
*/