describe('Primeiro teste' , () => {
    it('Acessar o menu forms' , async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('teste')
        await $('~switch').click()
        await $('~button-Active').click()
        expect(await $('id:android:id/message')).toBeDisplayed()
    });
});