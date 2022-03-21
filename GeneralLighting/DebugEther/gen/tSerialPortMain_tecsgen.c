/*
 * This file was automatically generated by tecsgen.
 * This file is not intended to be edited.
 */
#include "tSerialPortMain_tecsgen.h"
#include "tSerialPortMain_factory.h"

/* entry port descriptor type #_EDT_# */
/* eSerialPort */
struct tag_tSerialPortMain_eSerialPort_DES {
    const struct tag_sSerialPort_VMT *vmt;
    tSerialPortMain_IDX  idx;
};

/* enSerialPortManage : omitted by entry port optimize */

/* eiSIOCBR : omitted by entry port optimize */

/* entry port skelton function #_EPSF_# */
/* eSerialPort */
ER             tSerialPortMain_eSerialPort_open_skel( const struct tag_sSerialPort_VDES *epd)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_open( lepd->idx );
}
ER             tSerialPortMain_eSerialPort_close_skel( const struct tag_sSerialPort_VDES *epd)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_close( lepd->idx );
}
ER_UINT        tSerialPortMain_eSerialPort_read_skel( const struct tag_sSerialPort_VDES *epd, char* buffer, uint_t length, TMO tmout)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_read( lepd->idx, buffer, length, tmout );
}
ER_UINT        tSerialPortMain_eSerialPort_write_skel( const struct tag_sSerialPort_VDES *epd, const char* buffer, uint_t length)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_write( lepd->idx, buffer, length );
}
ER             tSerialPortMain_eSerialPort_control_skel( const struct tag_sSerialPort_VDES *epd, uint_t ioControl)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_control( lepd->idx, ioControl );
}
ER             tSerialPortMain_eSerialPort_refer_skel( const struct tag_sSerialPort_VDES *epd, T_SERIAL_RPOR* pk_rpor)
{
    struct tag_tSerialPortMain_eSerialPort_DES *lepd
        = (struct tag_tSerialPortMain_eSerialPort_DES *)epd;
    return tSerialPortMain_eSerialPort_refer( lepd->idx, pk_rpor );
}
/* enSerialPortManage : omitted by entry port optimize */
/* eiSIOCBR : omitted by entry port optimize */

/* entry port skelton function table #_EPSFT_# */
/* eSerialPort */
const struct tag_sSerialPort_VMT tSerialPortMain_eSerialPort_MT_ = {
    tSerialPortMain_eSerialPort_open_skel,
    tSerialPortMain_eSerialPort_close_skel,
    tSerialPortMain_eSerialPort_read_skel,
    tSerialPortMain_eSerialPort_write_skel,
    tSerialPortMain_eSerialPort_control_skel,
    tSerialPortMain_eSerialPort_refer_skel,
};
/* enSerialPortManage : omitted by entry port optimize */
/* eiSIOCBR : omitted by entry port optimize */

/* entry port descriptor referenced by call port (differ from actual definition) #_CPEPD_# */

/* call port array #_CPA_# */

/* array of attr/var #_AVAI_# */
char tSerialPortMain_SerialPort1_SerialPortMain_CB_receiveBuffer_INIT[256];
char tSerialPortMain_SerialPort1_SerialPortMain_CB_sendBuffer_INIT[256];
/* cell INIB #_INIB_# */
tSerialPortMain_INIB tSerialPortMain_INIB_tab[] = {
    /* cell: tSerialPortMain_CB_tab[0]:  SerialPort1_SerialPortMain id=1 */
    {
        /* entry port #_EP_# */ 
        /* attribute(RO) */ 
        256,                                     /* receiveBufferSize */
        256,                                     /* sendBufferSize */
        tSerialPortMain_SerialPort1_SerialPortMain_CB_receiveBuffer_INIT, /* receiveBuffer */
        tSerialPortMain_SerialPort1_SerialPortMain_CB_sendBuffer_INIT, /* sendBuffer */
    },
};

/* cell CB #_CB_# */
struct tag_tSerialPortMain_CB tSerialPortMain_CB_tab[1];
/* entry port descriptor #_EPD_# */
extern const struct tag_tSerialPortMain_eSerialPort_DES SerialPort1_SerialPortMain_eSerialPort_des;
const struct tag_tSerialPortMain_eSerialPort_DES SerialPort1_SerialPortMain_eSerialPort_des = {
    &tSerialPortMain_eSerialPort_MT_,
    &tSerialPortMain_CB_tab[0],      /* CB 3 */
};
/* enSerialPortManage : omitted by entry port optimize */
/* eiSIOCBR : omitted by entry port optimize */
/* CB initialize code #_CIC_# */
void
tSerialPortMain_CB_initialize()
{
    tSerialPortMain_CB	*p_cb;
    int		i;
    FOREACH_CELL(i,p_cb)
        SET_CB_INIB_POINTER(i,p_cb)
        INITIALIZE_CB(p_cb)
    END_FOREACH_CELL
}
