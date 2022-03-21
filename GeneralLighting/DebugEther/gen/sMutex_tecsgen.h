/*
 * This file was automatically generated by tecsgen.
 * This file is not intended to be edited.
 */
#ifndef sMutex_TECSGEN_H
#define sMutex_TECSGEN_H

/*
 * signature   :  sMutex
 * global name :  sMutex
 * context     :  task
 */

#ifndef TOPPERS_MACRO_ONLY

/* signature descriptor #_SD_# */
struct tag_sMutex_VDES {
    struct tag_sMutex_VMT *VMT;
};

/* signature function table #_SFT_# */
struct tag_sMutex_VMT {
    ER             (*lock__T)( const struct tag_sMutex_VDES *edp );
    ER             (*lockPolling__T)( const struct tag_sMutex_VDES *edp );
    ER             (*lockTimeout__T)( const struct tag_sMutex_VDES *edp, TMO timeout );
    ER             (*unlock__T)( const struct tag_sMutex_VDES *edp );
    ER             (*initialize__T)( const struct tag_sMutex_VDES *edp );
    ER             (*refer__T)( const struct tag_sMutex_VDES *edp, T_RSEM* pk_mutexStatus );
};

/* signature descriptor #_SDES_# for dynamic join */
#ifndef Descriptor_of_sMutex_Defined
#define  Descriptor_of_sMutex_Defined
typedef struct { struct tag_sMutex_VDES *vdes; } Descriptor( sMutex );
#endif
#endif /* TOPPERS_MACRO_ONLY */

/* function id */
#define	FUNCID_SMUTEX_LOCK                     (1)
#define	FUNCID_SMUTEX_LOCKPOLLING              (2)
#define	FUNCID_SMUTEX_LOCKTIMEOUT              (3)
#define	FUNCID_SMUTEX_UNLOCK                   (4)
#define	FUNCID_SMUTEX_INITIALIZE               (5)
#define	FUNCID_SMUTEX_REFER                    (6)

#endif /* sMutex_TECSGEN_H */
